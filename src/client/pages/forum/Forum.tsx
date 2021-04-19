import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import Pagination from '../../components/pagination';
import Button from '../../components/button';
import TopicLink from '../../components/topic-link';
import Input from '../../components/input';
import Loader from '../../components/loader';
import { TopicEntry } from '../../API/forum';
import { ApplicationState } from '../../store/types';
import { TopicsState } from '../../store/forum/types';
import { useApiForum, useForm } from '../../hooks';
import { FormState } from '../../hooks/useForm/types';
import { User } from '../../store/user/types';

import './forum.scss';

const initState: FormState = {
  name: { value: '', type: 'textarea' },
};

export default function Forum() {
  const { page = '1' } = useParams<{ page?: string }>();
  const [creatingTopic, setCreatingTopic] = useState(false);

  const toggleTopicCreation = () => {
    setCreatingTopic(prev => !prev);
  };

  const { createTopic, fetchTopics } = useApiForum();

  const topics = useSelector<ApplicationState, TopicsState>(state => state.topics);
  const user = useSelector<ApplicationState, User>(state => state.user!);

  const handleTopicCreate = useCallback((data: FormState) => {
    const requestData = {
      name: data.name.value,
      userId: user.id,
    };
    createTopic(requestData);
    toggleTopicCreation();
  }, [createTopic, user.id, user.login]);

  useEffect(() => {
    fetchTopics(Number(page) - 1);
  }, [fetchTopics, page]);

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    getErrorMessage,
  } = useForm(initState, handleTopicCreate);

  const { data, error, loading } = topics;

  let children;

  if (error) {
    children = 'Something went wrong. Reload page, please';
  } else if (loading) {
    children = (
      <div style={{ position: 'relative', height: '100%', width: '100%' }}>
        <Loader />
      </div>
    );
  } else {
    children = data.map((item: TopicEntry) => (
      <TopicLink
        key={item.id}
        uid={item.id}
        title={`${item.name}`}
        messagesCounter={item.messagesCount}
      />
    ));
    if (!children.length) {
      children = <h1 className="margin_t_s-5">Нет топиков. Будь первым, кто начнет</h1>;
    }
  }

  return (
    <div className="page forum-page container container_is-column container_size-auto container_center">
      <div className="margin_tb_s-7 forum-page__header">
        <Pagination path="/forum" current={Number(page)} total={5} className="forum-page__pagination" />
        <Button
          size="small"
          styleType="primary"
          className="forum-page__button"
          onClick={toggleTopicCreation}
        >
          Создать тему
        </Button>
      </div>
      {
        creatingTopic && (
          <div className="margin_b_s-4 forum-page__topics">
            <form
              onBlur={handleBlur}
              onChange={handleChange}
              onSubmit={handleSubmit}
            >
              <Input
                type="text"
                name="name"
                title="Название темы"
                placeholder="Почему пингвины не летают"
                errorMessage={getErrorMessage('name')}
              />
              <Button
                type="submit"
                size="small"
                styleType="primary"
                className="margin_s-2"
              >
                Создать
              </Button>
              <Button
                size="small"
                styleType="secondary"
                className="margin_s-2"
                onClick={toggleTopicCreation}
              >
                Отмена
              </Button>
            </form>
          </div>
        )
      }
      <hr />
      <div className="forum-page__topics">
        {children}
      </div>
    </div>
  );
}
