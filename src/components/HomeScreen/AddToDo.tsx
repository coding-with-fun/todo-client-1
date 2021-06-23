import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { ChangeEventHandler, Fragment, useContext, useState } from "react";
import { ToDoDataContext } from "../../contexts/ToDoDataContext";

const AddToDo = () => {
    const initialData = {
        title: "",
        titleError: false,
    };
    const { isModalOpen, handleToggleModal, addToDo } =
        useContext(ToDoDataContext);

    const [userInput, setUserInput] = useState(initialData);

    const handleCloseModal = () => {
        setUserInput(initialData);
        handleToggleModal();
    };

    const handleUserInput: ChangeEventHandler<HTMLInputElement> = (e) => {
        setUserInput({
            ...userInput,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmitData = () => {
        if (!userInput.title) {
            setUserInput({
                ...userInput,
                titleError: true,
            });
        } else {
            const data = {
                id: Math.random() * 1000,
                title: userInput.title,
                isCompleted: false,
            };

            addToDo(data);
            setUserInput(initialData);
            handleToggleModal();
        }
    };

    return (
        <Fragment>
            <div
                className="fixed bottom-16 right-5 p-2 rounded-full cursor-pointer add_todo_button sm:block hidden"
                onClick={handleCloseModal}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                </svg>
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className="flex justify-center items-center"
                open={isModalOpen}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={isModalOpen}>
                    <div className="rounded-md sm:py-12 py-6 sm:px-16 px-8 sm:mx-6 mx-0 add_todo_modal sm:w-1/2 w-3/4">
                        <div className="flex justify-between items-center">
                            <p className="text-2xl">Add New ToDo Item</p>

                            <span
                                className="cursor-pointer"
                                onClick={handleCloseModal}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </span>
                        </div>

                        <div className="my-7">
                            <label htmlFor="title">Title</label>
                            <input
                                id="title"
                                type="text"
                                onChange={handleUserInput}
                                value={userInput.title}
                                className="block w-full px-4 py-2 mt-2 rounded-md focus:outline-none"
                                autoFocus
                                required
                            />
                            {userInput.titleError && (
                                <p className="my-2 todo_input_helper_text">
                                    Please enter ToDo Title
                                </p>
                            )}
                        </div>

                        <button
                            className="flex items-center px-2 py-2 font-medium tracking-wide capitalize transition-colors duration-200 transform rounded-md focus:outline-none"
                            onClick={handleSubmitData}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <span className="mx-1">Save</span>
                        </button>
                    </div>
                </Fade>
            </Modal>
        </Fragment>
    );
};

export default AddToDo;
