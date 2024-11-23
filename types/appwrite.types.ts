
export interface Client {
  id: number;
  name: string;
  image: string;
  status: string;
  group: string;
  brand: string;
  clientImage?: FormData;
  contact?: string;
}
