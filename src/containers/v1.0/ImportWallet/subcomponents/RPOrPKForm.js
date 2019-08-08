/**
 *
 * Import Wallet Page - Recovery Phrase/Private Key Form
 *
 */
// Modules
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { get as _get } from 'lodash';
import { FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Custom Components
// -- TO-DO: Update style for Recovery Phrase/Private Key form
import { RPOrPKFormStyler } from '../style';
// Utilities & Constants
import { withIntl } from '../../../../components/IntlProvider';
import { MSG } from '../../../../constants';

// ===== MAIN COMPONENT =====
class RPOrPKForm extends PureComponent {
  render() {
    const {
      errors,
      formValues,
      intl: { formatMessage },
      updateInput,
    } = this.props;
    return (
      <RPOrPKFormStyler className='p-0'>
        <FormGroup>
          <Label>
            <span>
              {formatMessage(MSG.IMPORT_WALLET_TAB_RECOVERY_PHRASE_INPUT_LABEL)}
            </span>
            <FontAwesomeIcon icon='unlock' />
          </Label>
          <Input
            type='textarea'
            name='recoveryPhrase'
            placeholder={formatMessage(
              MSG.IMPORT_WALLET_TAB_RECOVERY_PHRASE_INPUT_PLACEHOLDER,
            )}
            value={_get(formValues, 'recoveryPhrase', '')}
            onChange={e => updateInput('recoveryPhrase', e.target.value)}
            invalid={errors.length > 0}
          />
          <FormFeedback>
            {errors.map((err, errIdx) => (
              <div key={`error_${errIdx + 1}`}>{`* ${err}`}</div>
            ))}
          </FormFeedback>
          <FormText className='import-by-qrcode'>
            {formatMessage(
              MSG.IMPORT_WALLET_TAB_RECOVERY_PHRASE_OPTION_IMPORT_VIA_QRCODE,
            )}
          </FormText>
        </FormGroup>
      </RPOrPKFormStyler>
    );
  }
}
// ==========================

// ===== PROP TYPES =====
RPOrPKForm.propTypes = {
  /** Form error messages */
  errors: PropTypes.arrayOf(PropTypes.string),
  /** Form's input values */
  formValues: PropTypes.object,
  /** React Intl's instance object */
  intl: PropTypes.object,
  /** Action to handle input change */
  updateInput: PropTypes.func,
};

RPOrPKForm.defaultProps = {
  errors: [],
  formValues: {},
  intl: {},
  updateInput: () => {},
};

// ======================

export default withIntl(RPOrPKForm);