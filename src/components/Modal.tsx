import { Dialog, Transition } from "@headlessui/react";
import { Fragment, type JSX } from "react";
import { useAppStore } from "../store/useAppStore";
import type { GetRecipe } from "../types";

export default function Modal() {
  const modal = useAppStore((state) => state.modal);
  const recipeById = useAppStore((state) => state.recipeById);
  const closeModal = useAppStore((state) => state.closeModal);
  const handleClickFavorites = useAppStore(
    (state) => state.handleClickFavorites
  );
  const favoriteExists = useAppStore((state) => state.favoriteExists);

  const renderIngredients = () => {
    const ingredients: JSX.Element[] = [];
    for (let i = 1; i <= 6; i++) {
      const ingredient = recipeById[`strIngredient${i}` as keyof GetRecipe];
      const measure = recipeById[`strMeasure${i}` as keyof GetRecipe];

      if (ingredient && measure) {
        ingredients.push(
          <li key={i} className="text-lg font-normal">
            {ingredient} - {measure}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                  <Dialog.Title
                    as="h3"
                    className="text-gray-900 text-4xl font-extrabold my-5 text-center"
                  >
                    {recipeById.strDrink}
                  </Dialog.Title>
                  <img
                    src={recipeById.strDrinkThumb}
                    alt={`imagen de ${recipeById.strDrink}`}
                    className=" mx-auto w-96"
                  />
                  <Dialog.Title
                    as="h3"
                    className="text-gray-900 text-2xl font-extrabold my-5"
                  >
                    Ingredientes y Cantidades
                  </Dialog.Title>
                  {renderIngredients()}
                  <Dialog.Title
                    as="h3"
                    className="text-gray-900 text-2xl font-extrabold my-5"
                  >
                    Instrucciones
                  </Dialog.Title>
                  <p className=" text-lg">{recipeById.strInstructions}</p>
                  <div className=" mt-5 flex justify-between gap-4">
                    <button
                      type="button"
                      className=" w-full rounded bg-gray-600 p-3 font-blold uppercase text-white shadow hover:bg-gray-500"
                      onClick={closeModal}
                    >
                      Cerrar
                    </button>
                    <button
                      type="button"
                      className=" w-full rounded bg-orange-600 p-3 font-blold uppercase text-white shadow hover:bg-orange-500"
                      onClick={() => handleClickFavorites(recipeById)}
                    >
                      {favoriteExists(recipeById.idDrink)
                        ? "Eliminar favorito"
                        : "Agregar favorito"}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
