import javax.swing.*;
import java.awt.*;

public class WarnaHitamOranye {
    public static void main(String[] args) {
        
        JFrame frame = new JFrame("Warna Hitam dan Oranye");
        
        frame.setSize(400, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        
        JPanel panel = new JPanel();
        panel.setBackground(Color.BLACK);  
        frame.add(panel);
    
        JLabel label = new JLabel("Selamat datang di aplikasi dengan warna hitam dan oranye!");
        label.setForeground(Color.ORANGE);  
        panel.add(label);
        
        // Menampilkan JFrame
        frame.setVisible(true);
    }
}
