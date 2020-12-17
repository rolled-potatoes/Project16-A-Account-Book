import React from 'react';
import utils from 'utils';
import * as S from './style';

export interface OneDateType {
  date?: number;
  income?: number;
  expense?: number;
  unclassified?: number;
}
export interface Props extends OneDateType {
  onClick?: () => void;
}

const CalendarOneDate = ({
  date,
  income,
  expense,
  unclassified,
  onClick,
  ...props
}: Props): React.ReactElement => {
  return (
    <S.CalendarOneDate onClick={(income || expense) && onClick} {...props}>
      <S.DateText>{date}</S.DateText>
      <S.PriceTextWrap>
        <S.IncomeText>
          {income && `${utils.summaryOfMoney(income)}원`}
        </S.IncomeText>
        <S.ExpenseText>
          {expense && `${utils.summaryOfMoney(expense)}원`}
        </S.ExpenseText>
        <S.UnclassifiedText>
          {unclassified && `${utils.summaryOfMoney(unclassified)}원`}
        </S.UnclassifiedText>
      </S.PriceTextWrap>
      <S.EmptyArea />
    </S.CalendarOneDate>
  );
};

export default CalendarOneDate;
