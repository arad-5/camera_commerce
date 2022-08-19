//types
import { CategoryRowCard as CategoryRowCardType } from "../../types/category";
import CategoryRowCard from "./CategoryRowCard";
interface Props {
    categories: CategoryRowCardType[];
}

const CategoriesRowSlider = ({ categories }: Props): JSX.Element => {
    return (
        <div className="space-x-2 flex flex-nowrap overflow-auto h-12">
            {categories.map((category) => (
                <CategoryRowCard {...category} />
            ))}
        </div>
    );
};

export default CategoriesRowSlider;
