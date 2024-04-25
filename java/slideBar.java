import javax.swing.*;

public class slideBar {
    public static void main(String[] args) {

        JFrame frame = new JFrame("RGB Color Picker");

        frame.setSize(400, 250);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(null);

        JLabel red = new JLabel("RED");
        red.setBounds(10, 10, 100, 30);
        frame.add(red);

        JSlider redSlider = new JSlider(0, 255, 0);
        redSlider.setBounds(120, 10, 200, 30);
        frame.add(redSlider);

        JTextArea redValue = new JTextArea("0");
        redValue.setBounds(330, 10, 50, 20);
        frame.add(redValue);

        JLabel green = new JLabel("GREEN");
        green.setBounds(10, 50, 100, 30);
        frame.add(green);

        JSlider greenSlider = new JSlider(0, 255, 0);
        greenSlider.setBounds(120, 50, 200, 30);
        frame.add(greenSlider);

        JTextArea greenValue = new JTextArea("0");
        greenValue.setBounds(330, 50, 50, 20);
        frame.add(greenValue);

        JLabel blue = new JLabel("BLUE");
        blue.setBounds(10, 90, 100, 30);
        frame.add(blue);

        JSlider blueSlider = new JSlider(0, 255, 0);
        blueSlider.setBounds(120, 90, 200, 30);
        frame.add(blueSlider);

        JTextArea blueValue = new JTextArea("0");
        blueValue.setBounds(330, 90, 50, 20);
        frame.add(blueValue);

        JPanel colorPanel = new JPanel();
        colorPanel.setBounds(10, 130, 370, 50);
        frame.add(colorPanel);

        colorPanel.setBackground(new java.awt.Color(0, 0, 0));

        redSlider.addChangeListener(e -> {
            redValue.setText(String.valueOf(redSlider.getValue()));
            colorPanel.setBackground(
                    new java.awt.Color(redSlider.getValue(), greenSlider.getValue(), blueSlider.getValue()));
        });

        greenSlider.addChangeListener(e -> {
            greenValue.setText(String.valueOf(greenSlider.getValue()));
            colorPanel.setBackground(
                    new java.awt.Color(redSlider.getValue(), greenSlider.getValue(), blueSlider.getValue()));
        });

        blueSlider.addChangeListener(e -> {
            blueValue.setText(String.valueOf(blueSlider.getValue()));
            colorPanel.setBackground(
                    new java.awt.Color(redSlider.getValue(), greenSlider.getValue(), blueSlider.getValue()));
        });

        redValue.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyReleased(java.awt.event.KeyEvent evt) {
                try {
                    int value = Integer.parseInt(redValue.getText());
                    if (value >= 0 && value <= 255) {
                        redSlider.setValue(value);
                        colorPanel.setBackground(
                                new java.awt.Color(redSlider.getValue(), greenSlider.getValue(),
                                        blueSlider.getValue()));
                    }
                } catch (NumberFormatException e) {
                }
            }
        });

        greenValue.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyReleased(java.awt.event.KeyEvent evt) {
                try {
                    int value = Integer.parseInt(greenValue.getText());
                    if (value >= 0 && value <= 255) {
                        greenSlider.setValue(value);
                        colorPanel.setBackground(
                                new java.awt.Color(redSlider.getValue(), greenSlider.getValue(),
                                        blueSlider.getValue()));
                    }
                } catch (NumberFormatException e) {
                }
            }
        });

        blueValue.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyReleased(java.awt.event.KeyEvent evt) {
                try {
                    int value = Integer.parseInt(blueValue.getText());
                    if (value >= 0 && value <= 255) {
                        blueSlider.setValue(value);
                        colorPanel.setBackground(
                                new java.awt.Color(redSlider.getValue(), greenSlider.getValue(),
                                        blueSlider.getValue()));
                    }
                } catch (NumberFormatException e) {
                }
            }
        });

        frame.setVisible(true);
    }
}
