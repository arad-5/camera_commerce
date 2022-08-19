import request from "./request";
import { CategoryRowCard } from "../types/category";

export const getCategories = async (): Promise<CategoryRowCard[]> => {
    const { categories } = await request(`
        {
            categories {
                title
                categorySlug
                picture {
                    url
                }
            }
        }
    `);
    return categories;
};
