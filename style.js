import { StyleSheet } from "react-native"

export const appStyles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 16

    },
    title:{
        fontSize: 30,
    },
    subTitle: {
        fontSize: 20,
        marginTop: 4,
        color: "#666"
    },
    input:{
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#ddd",
        fontSize:15,
        marginTop:32,
    },
    buttonContainer:{
        backgroundColor: "lightblue",
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius:6,
        alignSelf: "flex-end",
        alignItems: "center",
        marginTop:8
    },
    buttonText:{
        fontSize:16,
    },
    divider:{
        height: 1,
        backgroundColor: "#ddd",
        marginVertical: 32,
    },
    taskContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
        borderBottomWidth: 1,
        paddingVertical: 12,
    },
    taskText:{
        fontSize: 18,
    },
    taskDelete:{
        width: 23,
        height: 23,
        borderRadius: 13,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
    },
    taskDeleteText:{
        fontSize:15,
        color:"white",
    }
})