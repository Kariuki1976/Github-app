export class Repository {
    constructor (
      public name: string,
      public html_url: string,
      public description: string,
      public updated_at: Date,
      public created_at: Date,
      public clone_url: string,
      ) {}
}
