export abstract class BdTemplate {
  public static type: string;

  public abstract setData(data: any): void;
}

export interface BdTemplateData {
  type: string;
}
