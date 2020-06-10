import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>;
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="test">
          <img
            src="https://avatars2.githubusercontent.com/u/19830645?s=460&u=9cbbcfd47fc74c54a1853802e08daf8667732804&v=4"
            alt="Antonino Praxedes"
          />
          <div>
            <strong>apfjunior/github-explore</strong>
            <p>It's just a test. ^^</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars2.githubusercontent.com/u/19830645?s=460&u=9cbbcfd47fc74c54a1853802e08daf8667732804&v=4"
            alt="Antonino Praxedes"
          />
          <div>
            <strong>apfjunior/github-explore</strong>
            <p>It's just a test. ^^</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars2.githubusercontent.com/u/19830645?s=460&u=9cbbcfd47fc74c54a1853802e08daf8667732804&v=4"
            alt="Antonino Praxedes"
          />
          <div>
            <strong>apfjunior/github-explore</strong>
            <p>It's just a test. ^^</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
