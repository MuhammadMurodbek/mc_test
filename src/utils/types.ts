export type ModalStateProps = {
	open: boolean;
	id: string | number;
};
export interface TPropsModal {
	modalState: ModalStateProps;
	setModalState: React.Dispatch<React.SetStateAction<ModalStateProps>>;
}
export interface TStateModal {
    name?: string;
    email?: string;
    contact?: string;
    check?:boolean
}