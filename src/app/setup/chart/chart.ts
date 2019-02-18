export class Chart {
  glass?: string | null | undefined;
  metal?: string | null | undefined;
  paper?: string | null | undefined;
  plastic?: string | null | undefined;

  constructor(params: Chart) {
    Object.assign(this, params);
  }
}
