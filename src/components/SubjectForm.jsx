import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import moment from 'moment';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const initialSubject = {
  id: Date.now(),
  title: '',
  end_at: '',
  children: [],
  editSpace: false,
};

const SubjectForm = ({ addSubjectHanlder }) => {
  const subjectForm = useFormik({
    initialValues: { ...initialSubject },
    onSubmit: (values, { setValues }) => {
      console.log(values);
      addSubjectHanlder({ subject: values });
      setValues({ ...initialSubject, id: Date.now() });
    },
  });

  const handleTitleChange = ({ target: { value: title } }) =>
    subjectForm.setValues(prev => ({ ...prev, title }));

  return (
    <Form>
      <SubjectTitleInput
        placeholder="과목명을 입력 해주세요"
        value={subjectForm.values.title}
        onChange={handleTitleChange}
      />
      <SubjectSubmitButton onClick={subjectForm.submitForm}>
        추가
      </SubjectSubmitButton>
      <DDayPicker
        value={
          subjectForm.values.end_at
            ? moment(subjectForm.values.end_at).format('YYYY-MM-DD')
            : ''
        }
        onChange={val => {
          if (val < Date.now()) {
            alert('유효하지 않은 마감일 입니다 ');
          } else {
            subjectForm.setFieldValue('end_at', val);
          }
        }}
        placeholderText="마감일을 선택 해주세요"
      />
    </Form>
  );
};

const Form = styled.form`
  padding: 16px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const DDayPicker = styled(DatePicker)`
  width: 200px;
  height: 32px;
  border-radius: 16px;
  text-align: center;
  margin-top: 16px;
  background-color: ${({ theme }) => theme.buttonColor};
  color: ${({ theme }) => theme.textColor};
  ::placeholder {
    color: ${({ theme }) => theme.textColor};
  }
`;

const SubjectSubmitButton = styled.div`
  width: 50px;
  text-align: center;
  line-height: 32px;
  margin-left: 8px;
  z-index: 9999;
  border-radius: 6px;
  height: 32px;
  cursor: pointer;
  color: #fff;
  background-color: ${({ theme }) => theme.primaryColor};
  border: none;
  position: absolute;
  right: 16px;
  bottom: 16px;
`;

const SubjectTitleInput = styled.input`
  width: 90%;
  height: 32px;
  border-radius: 16px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.inputBgColor};
  color: ${({ theme }) => theme.textColor};
  border: none;
  font-size: 16px;
  font-weight: bold;
`;

export default SubjectForm;
