/*
* Add Bearer Token and Http Headers to all htt request
*/
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoreService } from '../core/core.service';

@Injectable()
export class HttpJwtInterceptor implements HttpInterceptor {
    constructor(){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        request.url
        let currentUser = CoreService.getLoggedUserJWT();

       if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }

        return next.handle(request);
    }
}