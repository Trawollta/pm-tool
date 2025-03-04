import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = localStorage.getItem('token');
  console.log("🔑 Token gefunden:", authToken); 

  if (authToken) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Token ${authToken}`
      }
    });
    return next(cloned);
  }

  return next(req);
};
