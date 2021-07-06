import React from 'react';
import {
  Container,
  FirstNamePostFix,
  FirstLetterLastName,
  LastNamePostFix,
  Ending,
} from './Logo.styled';

const Logo = ({ title = '' }: { title: string }) => {
  const fullName = title.split(' ');
  const firstName = fullName[0];
  const lastName = fullName[1];
  const firstLetterName = firstName.substring(0, 1);
  const firstNamePostFix = firstName.substring(1);
  const firstLetterLastName = lastName.substring(0, 1);
  const lastNamePostFix = lastName.substring(1);

  return (
    <Container>
      {firstLetterName}
      <FirstNamePostFix>{firstNamePostFix}&nbsp;</FirstNamePostFix>
      <FirstLetterLastName>{firstLetterLastName}</FirstLetterLastName>
      <LastNamePostFix>{lastNamePostFix}</LastNamePostFix>
      <Ending>.</Ending>
    </Container>
  );
};

export default Logo;
