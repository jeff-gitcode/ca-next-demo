export type Customer = {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly password?: string;
  readonly token?: string;
  readonly phone?: string;
  readonly website?: string;
  readonly company?: string;
}
