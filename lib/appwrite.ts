export const AppwriteConfig ={
    endpoint : process.env.EXPO_PUBLIC_APPWRITE_ENDPONIT,
    platform : "foodordering",
    projectId : process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    databasesId : process.env.APPWRITE_DATABASES,
    users : process.env.APPWRITE_USERS 
}