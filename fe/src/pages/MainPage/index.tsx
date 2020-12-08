import React, { useEffect } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { TransactionStore } from 'stores/Transaction';
import Template from 'components/templates/MainTemplate';
import Header from 'components/organisms/HeaderBar';
import FilterBar from 'components/organisms/FilterBar';
import MonthInfo from 'components/organisms/MonthInfoHeader';
import NavBarComponent from 'components/organisms/NavBar';
import NoData from 'components/organisms/NoData';
import TransactionDateList from './TransactionDateList';

const MainPage = () => {
  useEffect(() => {
    TransactionStore.loadTransactions();
  }, []);

  const SubHeaderBar = (
    <MonthInfo
      month={toJS(TransactionStore.dates.startDate.getMonth() + 1)}
      total={TransactionStore.totalPrices}
    />
  );

  const Contents = (
    <div>
      <FilterBar />
      <TransactionDateList list={toJS(TransactionStore.transactions)} />
    </div>
  );

  if (toJS(TransactionStore.transactions).length === 0) {
    const ContentsComponent = (
      <>
        <FilterBar />
        <NoData />
      </>
    );
    return (
      <Template
        HeaderBar={<Header />}
        SubHeaderBar={SubHeaderBar}
        Contents={ContentsComponent}
        NavBar={<NavBarComponent />}
      />
    );
  }
  return (
    <Template
      HeaderBar={<Header />}
      SubHeaderBar={SubHeaderBar}
      Contents={Contents}
      NavBar={<NavBarComponent />}
    />
  );
};

export default observer(MainPage);
