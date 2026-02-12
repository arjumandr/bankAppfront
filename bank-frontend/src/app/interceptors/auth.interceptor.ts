import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('auth');
  console.log("Interceptor running:", token);

  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Basic ${token}`
      }
    });

    return next(authReq);   // ✅ send modified request
  }

  return next(req);
};
