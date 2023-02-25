package com.javachinna.service;
import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import com.javachinna.model.Departement;
import com.javachinna.model.Etudiant;
import com.javachinna.repo.DepartementRepository;
import com.javachinna.repo.EtudiantRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.lang.annotation.Documented;
import java.util.List;
import java.util.stream.Stream;

@Service
@Slf4j
public class DepartementService implements IDepartmentService {
    @Autowired
    DepartementRepository departementRepository;
    @Autowired
    EtudiantRepository etudiantRepository;
    @Override
    public Long ajouter_Department(Departement d) {
        departementRepository.save(d);
        return d.getIdDepartment();
    }

    @Override
    public String delet_Department(Long id) {
        departementRepository.deleteById(id);
        return "deleted";
    }

    @Override
    public List<Departement> displayDepartment() {
        return departementRepository.findAll();
    }

    @Override
    public Departement getDepById(Long id) {
        return departementRepository.findById(id).get();
    }
    @Override
    public void updatedepartement (Departement d, Long id  )
    {
        Departement departement = getDepById(id);
        departement.setNomDepart(d.getNomDepart());
        departement.setEmplacement(d.getEmplacement());
        departement.setEmail(d.getEmail());
        departement.setDescription(d.getDescription());
        departement.setSection(d.getSection());


        departementRepository.save(departement) ;



    }
    @Override
    public String deletAllDEP() {
        departementRepository.deleteAll();
        return "deleted";
    }

    @Override
    public List<Etudiant> getEtudiantsByDepartement(Long idDepartement) {
        Departement dep = departementRepository.findById(idDepartement).orElse(null);
        //return dep.getEtds();

        return  etudiantRepository.findAll();
    }

    @Override
    public ByteArrayInputStream departementPdfReport(List<Departement> departements) {
        Document document = new Document();
        ByteArrayOutputStream out =new ByteArrayOutputStream();
        try {
            PdfWriter.getInstance(document,out);
            document.open();
            com.itextpdf.text.Font font= FontFactory.getFont(FontFactory.COURIER,14, BaseColor.BLACK);
            Paragraph para =new Paragraph("Departement List",font);
            para.setAlignment(Element.ALIGN_CENTER);
            document.add(para);
            document.add(Chunk.NEWLINE);
            PdfPTable table = new PdfPTable(6);
            Stream.of("Id Departement","Nom dep","emplacement","email","section","description").forEach(headerTitle->{
                PdfPCell header =new PdfPCell();
                com.itextpdf.text.Font headfont= FontFactory.getFont(FontFactory.HELVETICA_BOLD);
                header.setBackgroundColor(BaseColor.LIGHT_GRAY);
                header.setHorizontalAlignment(Element.ALIGN_CENTER);
                header.setBorder(1);
                header.setPhrase(new Phrase(headerTitle,headfont));
                table.addCell(header);

            });
            for (Departement dep :departements){
                PdfPCell titleCell=new PdfPCell(new Phrase(dep.getIdDepartment()));
                titleCell.setPaddingLeft(1);
                titleCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                titleCell.setHorizontalAlignment(Element.ALIGN_LEFT);
                table.addCell(titleCell);

                PdfPCell nomCell=new PdfPCell(new Phrase(dep.getNomDepart()));
                nomCell.setPaddingLeft(1);
                nomCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                nomCell.setHorizontalAlignment(Element.ALIGN_LEFT);
                table.addCell(nomCell);

                PdfPCell empCell=new PdfPCell(new Phrase(dep.getEmplacement()));
                empCell.setPaddingLeft(1);
                empCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                empCell.setHorizontalAlignment(Element.ALIGN_LEFT);
                table.addCell(empCell);

                PdfPCell emailCell=new PdfPCell(new Phrase(dep.getEmail()));
                emailCell.setPaddingLeft(1);
                emailCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                emailCell.setHorizontalAlignment(Element.ALIGN_LEFT);
                table.addCell(emailCell);

                PdfPCell secCell=new PdfPCell(new Phrase(dep.getSection()));
                secCell.setPaddingLeft(1);
                secCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                secCell.setHorizontalAlignment(Element.ALIGN_LEFT);
                table.addCell(secCell);

                PdfPCell descCell=new PdfPCell(new Phrase(dep.getDescription()));
                descCell.setPaddingLeft(1);
                descCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                descCell.setHorizontalAlignment(Element.ALIGN_LEFT);
                table.addCell(descCell);

            }
            document.add(table);
            document.close();
        }catch (DocumentException e) {
            e.printStackTrace();

        }


        return new ByteArrayInputStream(out.toByteArray());
    }
}
