package com.javachinna.service;


import com.itextpdf.io.image.ImageData;
import com.itextpdf.text.*;
import com.itextpdf.text.Font;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.io.image.ImageData;
import com.itextpdf.io.image.ImageDataFactory;

import com.javachinna.model.Equipe;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.aspectj.bridge.MessageUtil;
import org.springframework.stereotype.Service;




import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.stream.Stream;

import  java.net.MalformedURLException;

@Service
public class ExportEquipeService {


    public static ByteArrayInputStream equipeexportpdf(List<Equipe> equipes){
        Document document = new Document();
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        try {
            PdfWriter.getInstance(document, out);
            document.open();
            //addtext to pdf file


            // Creating an Image object
            Image image1 =  Image.getInstance("Images\\logoesprit.jpg");
            image1.scaleToFit(250, 250);
            // Adding image to the document
            document.add(image1);
            image1.setAlignment(Element.ALIGN_CENTER);
            com.itextpdf.text.Font font = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 30, BaseColor. BLACK);
            Paragraph para = new Paragraph("Equipe List", font);
            para.setAlignment(Element.ALIGN_CENTER);
            document.add(para);
            document.add(Chunk.NEWLINE);
            PdfPTable table = new PdfPTable(2);
            Stream.of( "nomEquipe", "niveau").forEach(headerTitle -> {
                PdfPCell header = new PdfPCell();
                com.itextpdf.text.Font headFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
                header.setBackgroundColor(BaseColor.LIGHT_GRAY);
                header.setHorizontalAlignment(Element.ALIGN_CENTER);

                header.setBorderWidth(1);
                header.setPhrase(new Phrase(headerTitle, headFont));
                table.addCell(header);
            });
            for (Equipe equipe : equipes) {

                PdfPCell nomEquipedCell = new PdfPCell(new Phrase(equipe.getNomEquipe()));
                nomEquipedCell.setPaddingLeft(1);
                nomEquipedCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                nomEquipedCell.setHorizontalAlignment(Element.ALIGN_LEFT);
                table.addCell(nomEquipedCell);


                PdfPCell niveauCell = new PdfPCell(new Phrase(equipe.getNiveau().toString()));
                niveauCell.setPaddingLeft(1);
               niveauCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                niveauCell.setHorizontalAlignment(Element.ALIGN_LEFT);
                table.addCell(niveauCell);


            }
            document.add(table);
            document.add(Chunk.NEWLINE);
Date date=new Date();
            SimpleDateFormat f=new SimpleDateFormat("yyyy-MM-dd ,hh:mm:ss");
            document.add(new Paragraph(f.format(date)));
            document.close();
        } catch (DocumentException | MalformedURLException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return new ByteArrayInputStream(out.toByteArray());
    }
public static  ByteArrayInputStream equipeexportexcel(List<Equipe>equipes) throws IOException {
       String[] columns={"nomEquipe","niveau"};
       try (Workbook workbook=new XSSFWorkbook();
            ByteArrayOutputStream out= new ByteArrayOutputStream();){
           CreationHelper creationHelper= workbook.getCreationHelper();
           Sheet sheet = workbook.getSheet("equipes");
           sheet.autoSizeColumn(columns.length);
           org.apache.poi.ss.usermodel.Font headerFont=workbook.createFont();
           headerFont.setBold(true);
           headerFont.setColor(IndexedColors.BLUE.getIndex());
           CellStyle cellStyle = workbook.createCellStyle();
           cellStyle.setFont(headerFont);
           //row for header
           Row headerRow=sheet.createRow(0);

           for(int col=0; col <columns.length; col++)
           {

               Cell cell=headerRow.createCell(col);
               cell.setCellValue(columns[col]);
               cell.setCellStyle(cellStyle);


           }
           CellStyle cellStyle1=workbook.createCellStyle();
           cellStyle1.setDataFormat(creationHelper.createDataFormat().getFormat("#"));
           int rowIndex=1;
           for (Equipe equipe:equipes){
               Row row=sheet.createRow(rowIndex++);

               row.createCell(0).setCellValue(equipe.getNomEquipe());
               row.createCell(1).setCellValue(equipe.getNiveau().toString());
           }
           workbook.write(out);
       return new ByteArrayInputStream(out.toByteArray());


       }


    }




}
