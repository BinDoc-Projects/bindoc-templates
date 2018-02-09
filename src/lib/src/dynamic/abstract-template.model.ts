export abstract class BdTemplate {

  /**
   * Useless initialization just to fix the build error occurring without.
   */
  public static type: string = 'AbstractTemplate';

  public abstract init(config: BdTemplateData): void;
}

export interface BdTemplateData {
  type: string;
  data: any;
}
