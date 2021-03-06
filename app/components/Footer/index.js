import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: (
              <A href="https://www.instagram.com/dheazafarina">dheazafarina</A>
            ),
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;
