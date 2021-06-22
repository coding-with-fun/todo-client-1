import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { Fragment, useContext } from "react";
import { ToDoDataContext } from "../../contexts/ToDoDataContext";

const AddToDo = () => {
    const { isModalOpen, handleToggleModal } = useContext(ToDoDataContext);

    return (
        <Fragment>
            <div
                className="fixed bottom-16 right-5 p-2 rounded-full cursor-pointer add_todo_button sm:block hidden"
                onClick={handleToggleModal}
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
                onClose={handleToggleModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={isModalOpen}>
                    <div className="rounded-md sm:py-12 py-6 sm:px-16 px-8 mx-6 add_todo_modal">
                        <h2 id="transition-modal-title">Transition modal</h2>
                        <p id="transition-modal-description">
                            react-transition-group animates me.
                        </p>
                    </div>
                </Fade>
            </Modal>
        </Fragment>
    );
};

export default AddToDo;
