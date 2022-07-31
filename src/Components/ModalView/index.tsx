import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { hideModal } from '../../Store/actions';
import { RootState } from '../../Store/reducers';
import * as C from '../index';
import * as S from './styles';

const mapStateToProps = (state: RootState) => ({
    modal: state.modal.modal,
});

const mapDispatchToProps = {
    dispatchHideModal: hideModal,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ModalProps = {} & ConnectedProps<typeof connector>;

export function ModalView(title: any, description: any, props: ModalProps) {
    const { dispatchHideModal, modal } = props;

    if (!modal) {
        return null;
    }

    const onCloseButtonClick = () => {
        dispatchHideModal();
    };
    return (
        <S.Modal animationType={'slide'} visible={true}>
            <S.View>
                <S.Image source={require('../../Assets/image.jpeg')} />
                <S.PostTitle>{title}</S.PostTitle>
                <S.PostDescription>{description}</S.PostDescription>
                <C.Button
                    outline
                    title={'Fechar'}
                    onPress={onCloseButtonClick}
                    marginTop={'30px'}
                    width={'60%'}
                />
            </S.View>
        </S.Modal>
    );
}
