import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


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

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts() {
    this.accountService.getAll().subscribe(data => {
      this.accounts = data;
    });
  }

  createAccount() {
    this.accountService.create(this.newAccount).subscribe(() => {
      this.loadAccounts();
      this.newAccount = { name: '', balance: 0 }; // reset form
    });
  }

  deleteAccount(id: number) {
    this.accountService.delete(id).subscribe(() => {
      this.loadAccounts();
    });
  }
}
