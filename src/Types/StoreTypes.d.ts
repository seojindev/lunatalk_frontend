declare module 'StoreTypes' {
    import { RouterState } from 'connected-react-router';
    import { Codes, DefaultStatus, Login, MainSlide } from 'CommonTypes';

    // App Store
    export interface AppState {
        loading: boolean;
        pageLoading: boolean;
        status: boolean;
        loginState: boolean;
        service_message: string;
        common: {
            codes: Codes;
        };
        loginUser: Login;
    }

    // Main Store
    export interface MainState {
        main_slide: MainSlide[];
        // best_item: BestItem[];
        // hot_item: BestItem[];
        // categories: Categories;
    }

    // 인증 처리 Store
    export interface AuthsState {
        register: {
            getAuthCodeRequest: {
                status: DefaultStatus;
                result: {
                    phone_number: string;
                    auth_index: number | null;
                    auth_code: sring;
                    message: string;
                };
            };
            authCodeConfirm: {
                status: DefaultStatus;
                result: {
                    phone_number: string;
                    auth_index: number | null;
                    message: string;
                };
            };
            tryRegister: {
                status: DefaultStatus;
                message: string;
                result: {
                    id: string;
                    uuid: string;
                    login_id: string;
                    name: string;
                    type: string;
                    level: string;
                    status: string;
                };
            };
        };
        login: {
            tryLogin: {
                status: DefaultStatus;
                message: string;
                result: {
                    access_token: string;
                    refresh_token: string;
                };
            };
        };
        logout: {
            tryLogout: {
                status: DefaultStatus;
                message: string;
            };
        };
    }

    // store 인터페이스.
    export interface RootState {
        router: RouterState;
        app: AppState;
        main: MainState;
        auths: AuthsState;
    }
}
