import React, { useEffect } from 'react';
import { useParams, useRequest } from 'ice';
import store from '@/store';
import pageStore from '@/pages/UserInfo/store';

export default () => {
    const { id } = useParams();
    const { data, request } = useRequest({
        url: '/api/users/1',
        method: 'GET',
    });

    const [userState, userDispatchers] = store.useModel('user');
    const [pageState, pageDispatchers] = pageStore.useModel('foo');

    useEffect(() => {
        request();
        userDispatchers.getUserInfo();
    }, [])

    return (
        <>
            <div>{id}</div>
            <div>
                <span>{userState.id}</span>
                <span>{userState.name}</span>
            </div>
            <div>{pageState.title}</div>
        </>
    )
}
