import { useState} from 'react';
import {fetchImage} from '@oxford/services';
import {useDispatch} from 'react-redux';
import {uploadImage} from '../../../store/ImageSlice/ImageSlice.tsx';
import {AxiosResponse} from 'axios';
import {HomeTemplate} from '@oxford/templates';

const HomePage = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const getImage = () => {
        setLoading(true);
        fetchImage(695, 363)
            .then((response: AxiosResponse) => {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                dispatch(uploadImage(response.request.responseURL));
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return <HomeTemplate loading={loading} getImage={getImage}/>;
};

export default HomePage;
