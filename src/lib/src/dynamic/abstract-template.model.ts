export abstract class BdTemplate {
  public static type?: string;

  public abstract init(config: BdTemplateData): void;
}

export interface BdTemplateData {
  type: string;
  data: any;
}
