export default {
    endpoint: "auth",
    configureEndpoints: ["auth",  "master", "manufacture", "inventory", "inventory-azure", "merchandiser", "md", "sales", "purchasing", "purchasing-azure", "finance", "nmasterplan", "nsales","nmerchandiser", "purchasingJob","garment-production"],

    loginUrl: "authenticate",
    profileUrl: "me",

    authTokenType:"Bearer",
    //authTokenType: "JWT",
    accessTokenProp: "data",

    storageChangedReload : true
};
