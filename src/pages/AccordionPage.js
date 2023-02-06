import Accordion from "../components/Accordion";

function AccordionPage() {

  const items = [
    { id: 'id1', label: 'This is the label1', content: 'This is the content1' },
    { id: 'id2', label: 'This is the label2', content: 'This is the content2' },
    { id: 'id3', label: 'This is the label3', content: 'This is the content3' },

  ];

  return <Accordion items={items} />
}

export default AccordionPage;