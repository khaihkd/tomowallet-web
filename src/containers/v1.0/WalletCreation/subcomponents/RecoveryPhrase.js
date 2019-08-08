/**
 *
 * TomoWallet - Wallet Creation Page - Recovery Phrase Generation
 *
 * This component shows user a randomly generated mnemonic phrase, waiting to be noted down offline
 */
// ===== IMPORTS =====
// Modules
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  CardFooter,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Custom Component
// -- TO-DO: Update style for buttons
import {
  ButtonStyler,
  HeadingLarge,
  HeadingMedium,
  TextLinkYellow,
  TextBlue,
} from '../../../../styles';
// Utilities
import { withIntl } from '../../../../components/IntlProvider';
import { MSG } from '../../../../constants';
import { FORM_STATES } from '../constants';
// -- TO-DO: Add style for Recovery Phrase generation page
// ===================

// ===== MAIN COMPONENT =====
class RecoveryPhrase extends PureComponent {
  constructor(props) {
    super(props);

    this.handleConvertMnemonic = this.handleConvertMnemonic.bind(this);
  }

  handleConvertMnemonic() {
    const { mnemonic } = this.props;
    return mnemonic.split(' ');
  }

  render() {
    const {
      intl: { formatMessage },
      setFormState,
      toggleConfirmationPopup,
      toggleKeyViewPopup,
    } = this.props;
    const convertedMnemonic = this.handleConvertMnemonic();
    return (
      <Card>
        <CardHeader>
          <HeadingLarge>{formatMessage(MSG.RECOVERY_PHRASE_TITLE)}</HeadingLarge>
        </CardHeader>
        <CardBody>
          <HeadingMedium>
            {formatMessage(MSG.RECOVERY_PHRASE_NOTIFICATION_TITLE)}
          </HeadingMedium>
          <CardText>
            {formatMessage(MSG.RECOVERY_PHRASE_NOTIFICATION_DESCRIPTION)}
          </CardText>
          <Row noGutters className='mb-4 mt-4 box-recovery'>
            {convertedMnemonic.map((word, wordIdx) => (
              <Col
                key={`word_${wordIdx + 1}`}
                xs={6}
                sm={6}
                md={4}
                lg={4}
                className='p-4'
              >
                {`${wordIdx + 1}. ${word}`}
              </Col>
            ))}
          </Row>
          <Row noGutters>
            <Col>
              <TextLinkYellow href="#">
                <FontAwesomeIcon icon={['far', 'save']} className='mr-2' />
                {formatMessage(MSG.RECOVERY_PHRASE_BUTTON_SAVE)}
              </TextLinkYellow>
            </Col>
            <Col className='text-right'>
              <TextBlue role='presentation' onClick={() => toggleKeyViewPopup(true)}>
                {formatMessage(MSG.RECOVERY_PHRASE_BUTTON_VIEW_PRIVATE_KEY)}
                <FontAwesomeIcon icon='arrow-right' className='ml-2' />
              </TextBlue>
            </Col>
          </Row>
        </CardBody>
        <CardFooter>
          <Row>
            <Col size={6}>
              <ButtonStyler onClick={() => setFormState(FORM_STATES.WARNING)}>
                {formatMessage(MSG.COMMON_BUTTON_BACK)}
              </ButtonStyler>
            </Col>
            <Col size={6}>
              <ButtonStyler btnYellow onClick={() => toggleConfirmationPopup(true)}>
                {formatMessage(MSG.RECOVERY_PHRASE_BUTTON_CONFIRMATION)}
              </ButtonStyler>
            </Col>
          </Row>
        </CardFooter>
      </Card>
    );
  }
}
// ==========================

// ===== PROP TYPES =====
RecoveryPhrase.propTypes = {
  /** React Intl's instance object */
  intl: PropTypes.object,
  /** Recovery phrase string (12 words) */
  mnemonic: PropTypes.string,
  /** Action to update Recovery Phrase form state */
  setFormState: PropTypes.func,
  /** Action to toggle recovery phrase confirmation popup */
  toggleConfirmationPopup: PropTypes.func,
  /** Action to toggle private key view popup */
  toggleKeyViewPopup: PropTypes.func,
};

RecoveryPhrase.defaultProps = {
  intl: {},
  mnemonic: '',
  setFormState: () => {},
  toggleConfirmationPopup: () => {},
  toggleKeyViewPopup: () => {},
};
// ======================

export default withIntl(RecoveryPhrase);
