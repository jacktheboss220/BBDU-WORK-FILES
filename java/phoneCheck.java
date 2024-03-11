import javax.swing.*;

public class phoneCheck {
    public static void main(String[] args) {
        JFrame JF = new JFrame("Phone Number Checker");
        JF.setSize(300, 300);
        JF.setLayout(null);

        JLabel JL = new JLabel("Enter your phone number: ");
        JL.setBounds(50, 50, 200, 30);

        JTextField JT = new JTextField();
        JT.setBounds(50, 100, 200, 30);

        JT.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyTyped(java.awt.event.KeyEvent e) {
                char c = e.getKeyChar();
                if (c < '0' || c > '9')
                    e.consume();
            }
        });

        JButton JB = new JButton("Check");
        JB.setBounds(50, 150, 100, 30);

        JF.add(JL);
        JF.add(JT);
        JF.add(JB);

        JB.addActionListener(e -> {
            String phone = JT.getText();
            if (phone.matches("\\d{10}")) {
                JOptionPane.showMessageDialog(JF, "Valid Phone Number");
            } else {
                JOptionPane.showMessageDialog(JF, "Invalid Phone Number");
            }
        });

        JF.setVisible(true);
        JF.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}