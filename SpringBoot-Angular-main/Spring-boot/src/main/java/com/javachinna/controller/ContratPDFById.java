package com.javachinna.controller;

import com.itextpdf.io.image.ImageData;
import com.itextpdf.io.image.ImageDataFactory;
import com.itextpdf.kernel.color.Color;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.*;
import com.itextpdf.layout.element.Image;
import com.itextpdf.layout.property.TextAlignment;
import com.javachinna.model.Contrat;
import com.lowagie.text.DocumentException;
import com.lowagie.text.FontFactory;
import com.lowagie.text.Phrase;
import com.lowagie.text.pdf.PdfPCell;


import javax.servlet.http.HttpServletResponse;
import java.awt.*;
import java.io.IOException;
import java.util.List;

public class ContratPDFById {

    private Contrat contrat;

    public ContratPDFById(Contrat c) {
        this.contrat = c;
    }



    public void export(HttpServletResponse response) throws DocumentException, IOException {
        PdfWriter writer = new PdfWriter(response.getOutputStream());
        PdfDocument pdfDocument;
        pdfDocument = new PdfDocument(writer);
        Document document = new Document(pdfDocument);
        String imFile ="C:\\Users\\Hp\\Downloads\\angular-spring-boot-email-integration-main\\angular-spring-boot-email-integration-main\\angular-12-social-login\\src\\assets\\img\\logo.png";

        ImageData data = ImageDataFactory.create(imFile);

        // Creating an Image object
        com.itextpdf.layout.element.Image image = new Image(data);

        // Adding image to the document
        document.add(image);


        //  Paragraph p = new Paragraph("List of Contrat", font);
        //p.setAlignment(Paragraph.ALIGN_CENTER);
        com.itextpdf.layout.element.Paragraph p1 = new com.itextpdf.layout.element.Paragraph("CONTRAT").setFontColor(Color.RED).setFontSize(60).setTextAlignment(TextAlignment.CENTER).setItalic();
      /*  p1.setFontColor(com.itextpdf.kernel.color.Color.RED).setCharacterSpacing((float)10);
        p1.setItalic();
        p1.setTextAlignment(TextAlignment.CENTER);*/
        document.add(p1);
        com.itextpdf.layout.element.Paragraph t = new com.itextpdf.layout.element.Paragraph("Nom Etudiant : ").setFontSize(30).setTextAlignment(TextAlignment.CENTER);
        com.itextpdf.layout.element.Paragraph t1 = new com.itextpdf.layout.element.Paragraph("Date debut  : "+ this.contrat.getDateDebutContrat()).setFontSize(30).setTextAlignment(TextAlignment.CENTER);
        com.itextpdf.layout.element.Paragraph t2 = new com.itextpdf.layout.element.Paragraph("Date Fin  : "+ this.contrat.getDateFinContrat()).setFontSize(30).setTextAlignment(TextAlignment.CENTER);
        com.itextpdf.layout.element.Paragraph t3 = new com.itextpdf.layout.element.Paragraph("Specialite  : "+ this.contrat.getSpecialite()).setFontSize(30).setTextAlignment(TextAlignment.CENTER);
        com.itextpdf.layout.element.Paragraph t4 = new com.itextpdf.layout.element.Paragraph("Montant Contrat  : "+ this.contrat.getMontantContrat()).setFontSize(30).setTextAlignment(TextAlignment.CENTER).setBackgroundColor(Color.RED);

        document.add(t);

        document.add(t1);

        document.add(t2);

        document.add(t3);

        document.add(t4);


        // Closing the document
        document.close();

        System.out.println("Image added");
    }

}
