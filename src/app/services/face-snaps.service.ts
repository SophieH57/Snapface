import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  // private readonly SNAP_API_URL = `http://localhost:9000/facesnaps`;
  private readonly SNAP_API_URL = `http://localhost:3000/snapfaces`;

  constructor(private http: HttpClient) {}

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http
      .get<FaceSnap[]>(this.SNAP_API_URL)
      .pipe(
        tap(
          (FaceSnap) => console.log('FaceSnap :', FaceSnap),
          catchError(this.handleError)
        )
      );
  }

  getSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(this.SNAP_API_URL + `/${faceSnapId}`).pipe(
      tap((FaceSnap) => console.log(`FaceSnap ${faceSnapId} : `, FaceSnap)),
      catchError(this.handleError)
    );
  }

  postSnap(nouveauSnap: FaceSnap) {
    return this.http.post(this.SNAP_API_URL, nouveauSnap);
  }

  snapFaceSnapById(
    fs: FaceSnap,
    snapType: 'snap' | 'unsnap'
  ): Observable<FaceSnap> {
    snapType === 'snap' ? fs.snaps++ : fs.snaps--;
    return this.http.put<FaceSnap>(this.SNAP_API_URL + `/${fs.id}`, fs);
    // const selectFaceSnap = this.getSnapById(faceSnapId);
    // snapType === 'snap' ? selectFaceSnap.snaps++ : selectFaceSnap.snaps--;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
