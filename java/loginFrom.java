import javax.swing.*;

class loginFrom {
    public static void main(String[] args) {
        JFrame jf = new JFrame();
        jf.setSize(300, 200);
       jf.setLayout(null);

        JLabel labelTitle = new JLabel("Login Form");
        labelTitle.setBounds(100, 0, 80, 30);
        jf.add(labelTitle);

        JLabel labelUserName = new JLabel("Username");
        labelUserName.setBounds(20, 30, 80, 30);
        jf.add(labelUserName);

        JTextField textFieldUserName = new JTextField();
        textFieldUserName.setBounds(120, 30, 120, 30);
        jf.add(textFieldUserName);

        JLabel labelPassword = new JLabel("Password");
        labelPassword.setBounds(20, 60, 80, 30);
        jf.add(labelPassword);

        JPasswordField passwordField = new JPasswordField();
        passwordField.setBounds(120, 60, 120, 30);
        jf.add(passwordField);

        JButton buttonLogin = new JButton("Submit");
        buttonLogin.setBounds(40, 100, 80, 30);
        jf.add(buttonLogin);

        JButton buttonReset = new JButton("Clear");
        buttonReset.setBounds(140, 100, 80, 30);
        jf.add(buttonReset);

        jf.setVisible(true);
        jf.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        buttonReset.addActionListener(e -> {
            textFieldUserName.setText("");
            passwordField.setText("");
        });

        buttonLogin.addActionListener(e -> {
            String userName = textFieldUserName.getText();
            String password = new String(passwordField.getPassword());
            System.out.println("Username: " + userName);
            System.out.println("Password: " + password);
        });
    }
}