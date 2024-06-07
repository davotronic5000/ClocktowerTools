"use client";
import { Fragment, ReactNode } from "react";
import {
    Button,
    Dialog,
    DialogTrigger,
    Modal,
    ModalOverlay,
} from "react-aria-components";
import config from "../../../package.json";

const ChangelogModal = ({ children }: { children: ReactNode }) => {
    return (
        <DialogTrigger>
            <Button>{config.version}</Button>
            <ModalOverlay
                className="fixed inset-0 z-40 bg-gray-950/30 backdrop-blur"
                isDismissable
            >
                <Modal className="fixed bottom-0 right-0 top-0 w-[600px] overflow-auto border-gray-950 bg-gray-600 p-2">
                    <Dialog>
                        {({ close }) => <Fragment>{children}</Fragment>}
                    </Dialog>
                </Modal>
            </ModalOverlay>
        </DialogTrigger>
    );
};

export default ChangelogModal;
