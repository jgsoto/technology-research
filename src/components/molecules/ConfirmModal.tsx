import { forwardRef, useImperativeHandle, useDisclosure } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "@chakra-ui/react";
import { ButtonAtom } from "../atoms/ButtonAtom";

interface ConfirmModalProps {
    onConfirm: () => void;
}

export interface ConfirmModalRef {
    open: () => void;
}

export const ConfirmModal = forwardRef<ConfirmModalRef, ConfirmModalProps>(
    ({ onConfirm }, ref) => {
        const { isOpen, onOpen, onClose } = useDisclosure();

        useImperativeHandle(ref, () => ({
            open() {
                onOpen();
            },
        }));

        const handleConfirm = () => {
            onConfirm();
            onClose();
        };

        return (
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Delete Task</ModalHeader>
                    <ModalBody>Are you sure you want to delete this task?</ModalBody>
                    <ModalFooter>
                        <ButtonAtom label="Cancel" onClick={onClose} mr={3} />
                        <ButtonAtom label="Delete" colorScheme="red" onClick={handleConfirm} />
                    </ModalFooter>
                </ModalContent>
            </Modal>
        );
    }
);

ConfirmModal.displayName = "ConfirmModal";