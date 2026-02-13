import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./accounts.component.css'],
  templateUrl: './accounts.component.html',
})
export class AccountsComponent implements OnInit {

  accounts: any[] = [];

  newAccount: any = {
    name: '',
    balance: 0
  };
  error: string = '';
  success: string = '';

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts() {
    this.accountService.getAll().subscribe(data => {
      this.accounts = data;
    });
  }

  createAccount(form : NgForm) {
    this.error = '';
    this.success = '';
    if (!this.newAccount.name || this.newAccount.balance <= 0) {
      this.error = 'Please enter valid account details.';
      return;
    }
    this.accountService.create(this.newAccount).subscribe(() => {
      this.loadAccounts();
      // this.newAccount = { name: '', balance: 0 }; // reset form
      form.resetForm({
      name: '',
      balance: 0
    });
    });
    
  }

  deleteAccount(id: number) {
    this.accountService.delete(id).subscribe(() => {
      this.loadAccounts();
    });
  }
    // Add this property
    searchTerm: string = '';

    // Add this getter to filter the accounts list dynamically
    get filteredAccounts() {
      return this.accounts.filter(acc => 
        acc.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        acc.id.toString().includes(this.searchTerm)
      );
    }
}
