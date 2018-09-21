export class Usuario{
	constructor(
		public nombre: string,
		public apellido: string,
		public email: string,
		public password: string,
		public rol?: string,
		public _id?: string,
		){


	}
}