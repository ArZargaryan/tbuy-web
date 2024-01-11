type CategoryEntity = {
  id: number;
  label: string;
  icon: string; // SVG ICON
  numberOfSubcategories: number;
  subcategories?: Category[];
};

export class Category implements CategoryEntity {
  id: number;
  label: string;
  icon: string; // SVG ICON
  numberOfSubcategories: number;
  subcategories?: Category[];

  constructor({ id, label, icon, numberOfSubcategories, subcategories = [] }: CategoryEntity) {
    this.id = id;
    this.label = label;
    this.icon = icon;
    this.numberOfSubcategories = numberOfSubcategories;
    this.subcategories = subcategories;
  }
}
