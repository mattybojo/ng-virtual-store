import { Action, DocumentChangeAction, DocumentSnapshot } from '@angular/fire/firestore';

export function convertSnaps<T>(snaps: DocumentChangeAction<T>[]): T[] {
  return <T[]>snaps.map((snap: DocumentChangeAction<T>) => {
    const data: T = snap.payload.doc.data();
    return {
      id: snap.payload.doc.id,
      ...data,
    };
  });
}

export function convertSnap<T>(snap: DocumentChangeAction<T>[]): T {
  return {
    id: snap[0].payload.doc.id,
    ...snap[0].payload.doc.data(),
  };
}

export function convertSnapDoc<T>(snap: Action<DocumentSnapshot<T>>): T {
  const data: T = snap.payload.data()!;
  return {
    id: snap.payload.id,
    ...data,
  };
}

export function deleteId(object: any): any {
  delete object.id;
  return object;
}

export function isSameDate(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

// Convert date to YYYY/MM/DD for Safari to sort correctly
export function createDateFromString(dateString: string): Date {
  const dateParts: string[] = dateString.split('-');
  return new Date(`${dateParts[2]}/${dateParts[0]}/${dateParts[1]}`);
}

export function getIsoString(theDate: Date): string {
  const pad = (num: number) => {
    const norm = Math.floor(Math.abs(num));
    return (norm < 10 ? '0' : '') + norm;
  };
  return (
    theDate.getFullYear() +
    '-' +
    pad(theDate.getMonth() + 1) +
    '-' +
    pad(theDate.getDate()) +
    'T' +
    pad(theDate.getHours()) +
    ':' +
    pad(theDate.getMinutes()) +
    ':' +
    pad(theDate.getSeconds())
  );
}
