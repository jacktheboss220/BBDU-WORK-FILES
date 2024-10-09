import javax.swing.*;

public class checkBox {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Feedback Form");
        frame.setSize(400, 250);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(null);

        JLabel name = new JLabel("Name");
        name.setBounds(10, 10, 100, 30);
        frame.add(name);
        // hello

        JTextField nameField = new JTextField();
        nameField.setBounds(120, 10, 200, 30);
        frame.add(nameField);

        JCheckBox checkBox = new JCheckBox("Subscribe to our newsletter");
        checkBox.setBounds(10, 90, 300, 30);
        frame.add(checkBox);

        JButton submit = new JButton("Submit");
        submit.setBounds(10, 130, 100, 30);
        frame.add(submit);

        frame.setVisible(true);
    }
}