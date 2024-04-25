using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsForms1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            TextBox textBox = new TextBox();
            textBox.Text = "Hello World!";
            textBox.Location = new Point(10, 10);
            textBox.Size = new Size(100, 20);
            this.Controls.Add(textBox);

            Button button = new Button();
            button.Text = "Click Me!";
            button.Location = new Point(10, 40);
            button.Size = new Size(100, 20);
            button.Click += new EventHandler(button_Click);
            this.Controls.Add(button);

            Label label = new Label();
            label.Text = "Label";
            label.Location = new Point(10, 70);
            label.Size = new Size(100, 20);
            this.Controls.Add(label);

        }

        private void button_Click(object sender, EventArgs e)
        {
            throw new NotImplementedException();
        }
    }
}
