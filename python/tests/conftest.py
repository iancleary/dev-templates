from pytest import Config
from pytest import Session


def pytest_configure(config: Config) -> None:
    """
    Allows plugins and conftest files to perform initial configuration.
    This hook is called for every plugin and initial conftest
    file after command line options have been parsed.
    """


def pytest_sessionstart(session: Session) -> None:
    """
    Called after the Session object has been created and
    before performing collection and entering the run test loop.
    """


def pytest_sessionfinish(session: Session, exitstatus: int) -> int:
    """
    Called after whole test run finished, right before
    returning the exit status to the system.
    """
    return exitstatus


def pytest_unconfigure(config: Config) -> None:
    """
    called before test process is exited.
    """
