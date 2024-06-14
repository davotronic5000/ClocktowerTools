"use client";
import { Icon } from "@/components/icon";
import { ReactNode } from "react";
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
                <Modal className="fixed bottom-0 right-0 top-0 w-full overflow-auto border-l border-gray-600 bg-slate-800 p-2 shadow-xl shadow-gray-900 lg:w-[600px]">
                    <Dialog className="outline-none">
                        {({ close }) => (
                            <div className="flex flex-col">
                                <Button className="self-end" onPress={close}>
                                    <Icon
                                        type="x-mark"
                                        size="xs"
                                        className="text-gray-200"
                                    />
                                </Button>
                                {children}
                            </div>
                        )}
                    </Dialog>
                </Modal>
            </ModalOverlay>
        </DialogTrigger>
    );
};

export default ChangelogModal;
