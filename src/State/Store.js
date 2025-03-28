import { thunk } from "redux-thunk";
import authReducer from "./Auth/Reducer";

import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import coinReducer from "./Coin/Reducer";
import walletReducer from "./Wallet/Reducer";
import { withdrawalRedeucer } from "./Withdrawal/Reducer";
import orderReducer from "./Order/Reducer";
import assetReducer from "./Asset/Reducer";
import watchlistReducer from "./Watchlist/Reducer";
import Withdrawal from "@/page/Withdrawal/Withdrawal";

const rootReducer = combineReducers({
    auth: authReducer,
    coin: coinReducer,
    wallet: walletReducer,
    Withdrawal: withdrawalRedeucer,
    order: orderReducer,
    asset: assetReducer,
    watchlist: watchlistReducer,
});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));