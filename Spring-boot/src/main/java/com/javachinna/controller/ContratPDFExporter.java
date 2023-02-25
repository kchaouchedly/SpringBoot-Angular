package com.javachinna.controller;

import com.itextpdf.layout.element.Tab;
import com.itextpdf.layout.element.Table;
import com.itextpdf.layout.property.TextAlignment;

import com.itextpdf.io.image.ImageData;
import com.itextpdf.io.image.ImageDataFactory;

import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;

import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Image;
import com.javachinna.model.Contrat;
import com.lowagie.text.FontFactory;
import com.lowagie.text.Phrase;
import com.lowagie.text.pdf.PdfPCell;
import org.dom4j.DocumentException;


import javax.servlet.http.HttpServletResponse;
import java.awt.*;

import java.io.IOException;
import java.util.List;

public class ContratPDFExporter {

    private List<Contrat> listContrat;

    public ContratPDFExporter(List<Contrat> listUsers) {
        this.listContrat = listUsers;
    }

    private void writeTableHeader(Table table) {
        PdfPCell cell = new PdfPCell();
        cell.setBackgroundColor(Color.BLUE);
        cell.setPadding(5);

        com.lowagie.text.Font font = FontFactory.getFont(FontFactory.HELVETICA);
        font.setColor(Color.WHITE);

        cell.setPhrase(new Phrase(" ID", font));

        table.addCell( "ID").setBackgroundColor(com.itextpdf.kernel.color.Color.GRAY).setFontColor(com.itextpdf.kernel.color.Color.RED);

        cell.setPhrase(new Phrase("Date Debut", font));
        table.addCell("Date Debut");

        cell.setPhrase(new Phrase("Date Fin", font));
        table.addCell("Date Fin");

        cell.setPhrase(new Phrase("Specialite", font));
        table.addCell("Specialite");

        cell.setPhrase(new Phrase("Montant Contrat", font));
        table.addCell("Montant Contrat");
    }

    private void writeTableData(Table table) {
        for (Contrat c : listContrat) {
            table.addCell(String.valueOf(c.getIdContrat())).setBackgroundColor(com.itextpdf.kernel.color.Color.LIGHT_GRAY).setFontColor(com.itextpdf.kernel.color.Color.BLACK);
            table.addCell(String.valueOf(c.getDateDebutContrat())).setBackgroundColor(com.itextpdf.kernel.color.Color.LIGHT_GRAY).setFontColor(com.itextpdf.kernel.color.Color.BLACK);
            table.addCell(String.valueOf(c.getDateFinContrat())).setBackgroundColor(com.itextpdf.kernel.color.Color.LIGHT_GRAY).setFontColor(com.itextpdf.kernel.color.Color.BLACK);
            table.addCell(c.getSpecialite().toString()).setBackgroundColor(com.itextpdf.kernel.color.Color.LIGHT_GRAY).setFontColor(com.itextpdf.kernel.color.Color.BLACK);
            table.addCell(String.valueOf(c.getMontantContrat())).setBackgroundColor(com.itextpdf.kernel.color.Color.LIGHT_GRAY).setFontColor(com.itextpdf.kernel.color.Color.BLACK);
        }
    }

    public void export(HttpServletResponse response) throws DocumentException, IOException {
        // Creating a PdfWriter
       /* String dest = "C:\\Users\\LENOVO\\Documents\\exmpl1.pdf";
        PdfWriter writer = new PdfWriter(dest);

        // Creating a PdfDocument
        PdfDocument pdf = new PdfDocument(writer);

        // Creating a Document
        Document document = new Document(pdf);*/


        PdfWriter writer = new PdfWriter(response.getOutputStream());
        PdfDocument pdfDocument;
        pdfDocument = new PdfDocument(writer);
        Document document = new Document(pdfDocument);




        // Creating an ImageData object
        String imFile = "C:\\Users\\Hp\\Downloads\\angular-spring-boot-email-integration-main\\angular-spring-boot-email-integration-main\\angular-12-social-login\\src\\assets\\img\\logo.png";
        ImageData data = ImageDataFactory.create(imFile);

        // Creating an Image object
        Image image = new Image(data);

        // Adding image to the document
        document.add(image);


      //  Paragraph p = new Paragraph("List of Contrat", font);
        //p.setAlignment(Paragraph.ALIGN_CENTER);
        com.itextpdf.layout.element.Paragraph p1 = new com.itextpdf.layout.element.Paragraph("List of Contrats");
        p1.setFontColor(com.itextpdf.kernel.color.Color.RED).setCharacterSpacing((float)2.5);
        p1.setItalic();
        p1.setTextAlignment(TextAlignment.CENTER);
        document.add(p1);
        com.itextpdf.layout.element.Table table = new com.itextpdf.layout.element.Table(5);
       // PdfPTable table = new PdfPTable(5);
       /* table.setWidthPercentage(100f);
        table.setWidths(new float[] {1.5f, 3.5f, 3.0f, 3.0f, 1.5f});
        table.setSpacingBefore(10);
*/
        writeTableHeader(table);
        writeTableData(table);

        document.add(table);

        // Closing the document
        document.close();

        System.out.println("Image added");
    }














    }

