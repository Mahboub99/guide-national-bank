import { StyleSheet ,Font } from "@react-pdf/renderer";


Font.register({
    family: 'GE_SS_TEXT_LIGHT',
    src: 'http://localhost:8080/font.ttf',
});

const Styles = StyleSheet.create({
    
    PDFpage: {
        width: 1500,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflowY: "scroll",
        height: 600,
        marginBottom: 20,
        border: "#F49E3B 2px solid",
        borderRadius: 10,
        fontFamily: 'GE_SS_TEXT_LIGHT',
    },
    PDFpage__container: {
        padding: 50,
        paddingBottom: 100,
        width: "100%",
        textAlign: "center",
    },
    navOption__pdf: {
        backgroundColor: "#F49E3B",
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        height: 100,
        cursor: "pointer",
        borderRadius: 10,
        padding: 10,
        margin: "auto",
    },
    sectorTitle__pdf__container:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        margin: "auto",
        fontFamily: 'GE_SS_TEXT_LIGHT',
        marginTop:20,
        color: "#00643E",
        fontSize: 35,
        fontWeight: 700,

    },
    sectorTitle__pdf: {
        backgroundColor: "#00643E",
        height: 80,
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        margin: "auto",
        fontFamily: 'GE_SS_TEXT_LIGHT',
        marginTop:20,
    },
    sectorTitle__text: {
        width: "60%",
        fontSize: 28,
        fontWeight: 700,
        color: "white",
        textAlign: "left",
    },
    sectorTitle__pdfImageContainer: {
        width: "50%",
        textAlign: "right",
    },
    sectorTitle__pdf__img: {
        width: 50,
        marginLeft: 550,
    },
    PDFpage__courses: {

        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        position: "absolute",
        top: 250, 
    },
    courseCardPdf: {
        width: 250,
        height: "auto",
        borderRadius: 10,
        backgroundColor: "white",
        margin: 10,
        border: "2px solid #00643E",
        fontFamily: 'GE_SS_TEXT_LIGHT',
    },
    courseCardPdf__upperCard: {
        backgroundColor: "#E8EEF1",
        height: 200,
        margin: 8,
        borderRadius: 10,
        textAlign: "center",
    },
    courseCardPdf__upperCard__title: {
        paddingTop: 40,
        fontSize: 12,
        fontWeight: 700,
    },
    courseCardPdf__upperCard__text: {
       
        padding: 20,
        fontSize: 12,
        // text direction from right to left
        direction: "rtl",
        unicodeBidi: "embed",
       
    },
    courseCardPdf__lowerCard: {
        padding: 20,
    },
    courseCardPdf__lowerCard__element: {
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
    },
    courseCardPdf__lowerCard__text: {
        textAlign: "left",
        width: "70%",
        fontSize: 10,
    },
    courseCardPdf__lowerCard__iconContainer: {
        width: "30%",
        textAlign: "right",
    },
    courseCardPdf__lowerCard__icon: {

        marginLeft: 40,
        width: 15,
    },
    PDFpage__coursesWarper: {
        marginTop: 220,
        
    },
    PDFpage__coursesWarper__h1: {
        color: "#00643E",
    },

    introductionTitlePage__container:{
        backgroundColor: "#F49E3B",
        height: 150,
        width: "100%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "auto",
        fontFamily: 'GE_SS_TEXT_LIGHT',
    },
    introductionTitlePage__text:{
        fontSize: 40,
        color: "#00643E",
        
    }
    
});

export default Styles;
